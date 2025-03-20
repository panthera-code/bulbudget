import '../assets/style/email.css'

export default function Email({ type, name }) {

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
                    <>
                        <p>Félicitations, votre adresse mail a bien été validée !</p>
                        <p>Vous pouvez maintenant accéder à l'ensemble des fonctionnalités de <strong>Bul' Budget</strong>, et commencer à gérer votre budget de manière encore plus simple et intuitive.</p>
                        <p>Voici quelques-unes des fonctionnalités que vous pouvez dès à présent explorer :</p>
                        <ul>
                            <li><strong>Solde en temps réel</strong> : Suivez l'évolution de votre budget en temps réel grâce à notre système de mise à jour automatique.</li>
                            <li><strong>Solde prévisionnel</strong> : Visualisez votre solde à une date ultérieure, configurable par vos soins, pour mieux anticiper vos finances.</li>
                            <li><strong>Suivi par SMS</strong> : Configurez l'envoi de SMS pour recevoir des notifications régulières sur votre solde réel et prévisionnel, selon vos préférences.</li>
                            <li><strong>Prélèvements et virements automatiques</strong> : Consultez facilement la liste de vos prélèvements et virements automatiques afin de suivre vos transactions récurrentes.</li>
                        </ul>
                        <p>Pour commencer à profiter de ces fonctionnalités, nous vous invitons à complèter votre profil et à configurer vos préférences dans l'application.</p>
                    </>
                )
            case 'resetPassword':
                return (
                    <>
                        <p>Nous avons reçu une demande de réinitialisation de votre mot de passe pour votre compte <strong>Bul' Budget</strong>.</p>
                        <p>Pour le réinitialiser, il vous suffit d'utiliser le bouton de réinitialisation du mot de passe.</p>
                        <div className="buttons reset-button">
                            <button type='button'>Réinitialisation du mot de passe</button>
                        </div>
                        <p>Si vous n'êtes pas à l'origine de cette demande, il est possible qu'un tiers ait tenté d'accéder à votre compte. Dans ce cas, nous vous recommandons de suivre de suivre ces étapes :</p>
                        <ul>
                            <li>Changer immédiatement votre mot de passe via votre profil, en choisissant un mot de passe sécurisé.</li>
                            <li>Contactez-nous sur notre adresse <a href="mailto:pantheracode.dev@gmail.com">mail</a> pour signaler cet incident et demander une aide supplémentaire.</li>
                        </ul>
                        <p>Pour sécuriser davantage votre compte, nous vous conseillons également d'activer l'authentification à deux facteurs (2FA), si ce n'est pas déjà fait. Cela ajoute une couche de sécurité supplémentaire.</p>
                    </>
                )
            case 'updatePassword':
                return (
                    <>
                        <p>Nous vous informons que votre mot de passe a été mis à jour avec succès pour votre compte <strong>Bul' Budget</strong>.</p>
                        <p>Si vous êtes à l'origine de cette modification, vous pouvez ignorer ce mail et continuer à utiliser votre compte comme d'habitude.</p>
                        <p>Si vous n'êtes pas à l'origine de cette demande, il est possible qu'un tiers ait tenté d'accéder à votre compte. Dans ce cas, nous vous recommandons de suivre de suivre ces étapes :</p>
                        <ul>
                            <li>Contactez-nous sur notre adresse <a href="mailto:pantheracode.dev@gmail.com">mail</a> pour signaler cet incident et demander une aide supplémentaire.</li>
                        </ul>
                        <p>Nous désactiverons temporairement votre compte, le temps de procéder à quelques vérifications. Lorsque toute doute pour la sécurité de vos données sera levé, nous vous ferons parvenir un mail contenant un mot de passe temporaire. Vous serez alors invité à en créer un nouveau de manière sécurisée lors de votre prochaine connexion.</p>
                        <p>Pour sécuriser davantage votre compte, nous vous conseillons également d'activer l'authentification à deux facteurs (2FA), si ce n'est pas déjà fait. Cela ajoute une couche de sécurité supplémentaire.</p>
                    </>
                )
            case 'desactivate':
                return (
                    <>
                        <p>Nous vous informons que que votre compte <strong>Bul' Budget</strong> a été désactivé par vos soins.</p>
                        <p>Si vous n'êtes pas à l'origine de cette demande, il est possible qu'un tiers ait tenté d'accéder à votre compte. Dans ce cas, nous vous recommandons de suivre de suivre ces étapes :</p>
                        <ul>
                            <li>Contactez-nous sur notre adresse <a href="mailto:pantheracode.dev@gmail.com">mail</a> pour signaler cet incident et demander une aide supplémentaire.</li>
                        </ul>
                        <p>Nous vous enverrons un mail avec un mot de passe temporaire pour rétablir l'accès à votre compte. Vous serez alors invité à en créer un nouveau de manière sécurisée lors de votre prochaine connexion.</p>
                        <p>Pour sécuriser davantage votre compte, nous vous conseillons également d'activer l'authentification à deux facteurs (2FA), si ce n'est pas déjà fait. Cela ajoute une couche de sécurité supplémentaire.</p>
                    </>
                )
            case 'admin':
                return (
                    <>
                        <p>Nous vous informons que votre compte <strong>Bul' Budget</strong> a été désactivé temporairement afin de sécuriser vos données.</p>
                        <p>Nous procédons actuellement à quelques vérifications, puis nous reviendrons vers vous dans les plus brefs délais.</p>
                        <p>Une fois la prodécure terminée, nous vous enverrons un mail avec un mot de passe temporaire pour rétablir l'accès à votre compte. Vous serez alors invité à en créer un nouveau de manière sécurisée lors de votre prochaine connexion.</p>
                    </>
                )
            case 'security':
                return (
                    <>
                        <p>Comme promis, nous revenons vers vous avec une bonne nouvelle. La sécurisation de votre compte <strong>Bul' Budget</strong> est terminée.</p>
                        <p>Vous pouvez dès maintenant vous reconnecter à votre compte à l'aide de ce mot de passe temporaire [mot de passe temporaire]. Valide pendant 1h seulement, il vous permet de modifier votre mot de passe.</p>
                        <p>Pensez également à activer l'authentification à deux facteurs (2FA), si ce n'est pas déjà fait. Cela ajoute une couche de sécurité supplémentaire.</p>
                    </>
                )
        }
    }

    return (
        <div className='email'>
            <div className="logo-container">
                <img src="/Panthera Code.svg" alt="Logo 'Panthera Code'" />
            </div>
            <div className="content email-header">
                <h1>Bonjour {name},</h1>
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