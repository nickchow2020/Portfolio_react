import React from "react";


const MediaLogo = ()=>{
  return (
    <div className = "row">
					<div className = "media-links">
						<div className = "col-sm-1 col-md-1 col-sm-offset-4 col-md-offset-4">
							<div className = "facebook">
								<a href = "#">
                <img className = "img-responsive" src = "./images/facebook.svg" alt=""/>
                </a>
							</div>
						</div>

						<div className = "col-sm-1 col-md-1">
							<div className = "linkedin">
								<a href = "#">
                <img className = "img-responsive" src = "./images/linkedin.svg" alt=""/>
                </a>
							</div>
						</div>

						<div className = "col-sm-1 col-md-1">
							<div className = "pinterest">
								<a href = "#">
                <img className = "img-responsive" src = "./images/pinterest.svg" alt=""/>

                </a>
							</div>
						</div>

						<div className = "col-sm-1 col-md-1">
							<div className = "email-icon">
								<a href = "#">
                <img className = "img-responsive" src = "./images/email.svg" alt=""/>
                </a>
							</div>
						</div>
					</div>
				</div>
  )
}

export default MediaLogo