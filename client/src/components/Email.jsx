import '../assets/style/email.css'

export default function Email({ type }) {

    const renderContent = () => {
        switch (type) {
            case 'inscription':
                return (
                    <>
                        <p>Merci de vous être inscrit sur notre application <strong>Bul' Budget</strong>, nous sommes ravis de vous accueillir. C'est le premier pas vers une gestion simple de votre budget !</p>
                        <p>Pour finaliser votre inscription et accéder à l'ensemble des fonctionnalités, il vous suffit de confirmer votre adresse mail en utilisant le bouton de validation de votre compte.</p>
                        <div className="buttons validation-button">
                            <button type="button">Validation du compte</button>
                        </div>
                        <p>En le validant, vous serez redirigé sur votre profil. Vous recevrez un mail de confirmation d'inscription vous expliquant les fonctionnalités de l'application.</p>
                    </>
                )
            case 'confirmation':
                return (
                    <></>
                )
        }
    }

    return (
        <div className='email'>
            <div className="logo-container">
                <img src="/Panthera Code.svg" alt="Logo 'Panthera Code'" />
            </div>
            <div className="content email-header">
                <h1>Bonjour [Nom],</h1>
            </div>
            <div className="content email-content">
                {renderContent()}
            </div>
            <div className="content email-footer">
                <p>Pour toutes questions ou recommandations, vous pouvez nous contacter sur notre adresse <a href="mailto:pantheracode.dev@gmail.com">mail</a>. Nous ferons notre possible pour répondre dans les meilleurs délais.</p>
                <p>Merci !</p>
                <div className="sender">Panthera Code</div>
                <div className="qrcodes">
                    <div className="qrcode github">
                        <img src="/src/assets/img/GitHub.png" alt="QR Code GitHub" />
                        <div className="name">GitHub</div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}