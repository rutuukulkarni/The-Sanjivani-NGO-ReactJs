import '../css/landing.css';
import main from '../assets/landImg.jpg';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();
    return(
        <div className="landing">
                <span className="left">
                    <div className="caption1">
                        <hr />
                        <h4>VISIT SAMADHI</h4>
                    </div>
                    <div className="titles">
                        <div className="caption2">
                            <p>DAJI <span>MAHARAJ DEVASTHAN </span> </p>
                        </div>
                        <div className="caption3">
                            <p>May Maharaj give the inspiration to all devotees across all with betterment of our spiritual world . </p>
                        </div>
                        <div className="btns">
                            <button onClick={() => window.open("https://swd.vit.edu/", "_blank", "noopener noreferrer")} type="button" className="btn btn-outline-info">Know More</button>
                            {/* <button type="button" className="btn btn-success" onClick={()=>navigate("/donate")}>DONATE</button> */}
                        </div>
                    </div>

                </span>
                <span className="right">
                    <img src={main} alt="Smiling Faces" />
                </span>
            </div>
    );
}