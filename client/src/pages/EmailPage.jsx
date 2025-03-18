import { Link } from 'react-router-dom'

export default function EmailPage() {

    return (
        <>
            <h1>Modèles des emails</h1>
            <ul>
                <li><Link to="/email/inscription">Email d'inscription</Link></li>
                <li><Link to="/email/confirmation">Email de confirmation de validation</Link></li>
                <li><Link to="/email/resetPassword">Email de réinitialisation de mot de passe</Link></li>
                <li><Link to="/email/updatePassword">Email de modification du mot de passe</Link></li>
            </ul>
        </>
    )
    
}