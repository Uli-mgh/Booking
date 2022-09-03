import "./mailList.css";

const MailList = () => {
	return (
		<div className="mail">
			<h1 className="mailTitle">¡Ahorra tiempo y Dinero!</h1>
			<span className="mailDesc">
				Registrate y te enviaremos las mejores ofertas para ti
			</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="E-mail" />
                <button>Suscribite!</button>
            </div>
		</div>
	);
};

export default MailList;
