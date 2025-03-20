import { Link } from 'react-router-dom'

export default function EmailPage() {

    return (
        <>
            <h1>Modèles des emails</h1>
            <ul>
                <li><Link to="/email/inscription">Inscription</Link></li>
                <li><Link to="/email/confirmation">Confirmation d'inscription</Link></li>
                <li><Link to="/email/resetPassword">Réinitialisation du mot de passe</Link></li>
                <li><Link to="/email/updatePassword">Modification du mot de passe</Link></li>
                <li><Link to="/email/desactivate">Désactivation du compte par l'utilisateur</Link></li>
                <li><Link to="/email/admin">Désactivation du compte par un administrateur</Link></li>
                <li><Link to="/email/security">Sécurisation du compte</Link></li>
            </ul>
        </>
    )
    
}