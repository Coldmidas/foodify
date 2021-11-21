import '../maimInfoCard/mainInfoCard.scss'

    const AddCard = (props) => {
      

       return (
        <div className="CardWrapper">
            <div className="card">
            <img src="https://smehden.club/wp-content/uploads/2019/10/kartinka_net_foto_4_17144226.jpg" className="card__picture" alt="img no found"/>
                <div className="card__body">
                    <h3 className="card__title">title</h3>
                    <p className="card__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
        </div>
       )
    }
    // 
export default AddCard