import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/testimonies.css';

function Testimonies() {
  // Regex pour les validations
  const stringRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
  const numeroRegex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

  const navigate = useNavigate()
    
  const [testimonies, setTestimonies] = useState([])

  const [state, setState] = useState({
    numero: '',
    name: '',
    message: ''
  })


  // Erreur de validation
  const [errors, setErrors] = useState({
    numero: '',
    name: '',
    message: '',
  })

  function handleChange(event) {
    const {name, value, checked, type} = event.target
    type !== 'checkbox' && validateField(name, value)
    setState(previousState => ({ ...previousState, [name]: type === 'checkbox' ? checked : value }))
  }

  // Valider chaque champ avec des conditions donnees
  function validateField(field, value) {
    switch (field) {
        case 'name':
        case 'message':
            if (!stringRegex.test(value)) setErrors(prev => ({ ...prev, [field]: `${field} n'est pas valide` }))
            else setErrors(prev => ({ ...prev, [field]: '' }))
            break
        case 'numero':
            if (!numeroRegex.test(value)) setErrors(prev => ({ ...prev, [field]: `${field} n'est pas valide` }))
            else setErrors(prev => ({ ...prev, [field]: '' }))
            break
        default:
            break
    }
  }

  // Verifier si un champ a une erreur pour l'afficher
  function fieldHasError(field) {
      if (errors[field] && errors[field] !== '') return true
      return false
  }

  // Verifier si toute la forme est valide
  function isFormValid() {
    if (stringRegex.test(state.name) && stringRegex.test(state.message) && numeroRegex.test(state.numero)) return true
    else {
        Object.keys(state).forEach(field => {
            if (field !== 'checkbox') validateField(field, state[field])
        })
        return false
    }
  }

  // Fonction pour sauvegarder dans la base de donnée.
  function submit(event) {
    event.preventDefault()

    isFormValid() && axios.post(`http://localhost:5500/temoigneurs/`, state)
    .then(res => navigate('/'))
    .catch(err => {
          // Mettre a jour l'objet des erreurs avec les erreurs du backend (si cela existait)
        let errors = {}
        err.response.data.errors.forEach(error => {
            errors = { ...errors, ...error }
        })
        setErrors(errors)
        console.log('Erreur ajout temoignage', err.response.data.errors)
    })
  }

  function getTestimonyList(){
    axios.get('http://localhost:5500/temoigneurs')
    .then(res=>{
        setTestimonies(res.data.data)
        console.log('res', res)
    }).catch(err=>{
        console.error('err', err)
    })
  }  

  useEffect(() => {
    getTestimonyList()
  }, [])
  
  return (
    <div className="wrapper">
      <div className="testimonial-container">
        <h1>Testimonial Form</h1>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="numero">ID</label>
            <input onChange={handleChange} className={`${fieldHasError('numero') && "is-invalid"}`} type="text" id="numero" name="numero" />
            <div className={fieldHasError('numero') ? "invalid-feedback" : ""}>{errors.numero}</div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} className={`${fieldHasError('name') && "is-invalid"}`} type="text" id="name" name="name" />
            <div className={fieldHasError('name') ? "invalid-feedback" : ""}>{errors.name}</div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea onChange={handleChange} className={`${fieldHasError('message') && "is-invalid"}`} id="message" name="message" rows="5"></textarea>
            <div className={fieldHasError('message') ? "invalid-feedback" : ""}>{errors.message}</div>
          </div>
          <button type="submit">Send</button>
        </form>
        <div className='comment-testimonies'>
        <h1>Comment from the testimonies</h1>
        {testimonies.map(temoigneur => <div className='temoigneur' key={temoigneur.numero}>
            <h2>{temoigneur.name}</h2>
            <p>{temoigneur.message}</p>
        </div>)}
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
