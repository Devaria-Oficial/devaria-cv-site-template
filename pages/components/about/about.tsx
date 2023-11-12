import React from "react";
import { Container } from "react-bootstrap";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";

const AboutUs: React.FC = () => {
	return (
		<>
			<section className="section">
				<Container>
					<SectionHeader>
						<>Sobre mim</>
					</SectionHeader>
					<div className="clearfix" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400" data-aos-easing="ease-out-cubic">
						<p>XXXX
						</p>
					</div>
					<div className="short-info" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400" data-aos-easing="ease-out-cubic">
						<ul className="list-unstyled">
							<li>
								<span className="first">Nome:</span>
								<span className="second">XXXX</span>
							</li>
							<li>
								<span className="first">Idade:</span>
								<span className="second">XX</span>
							</li>
							<li>
								<span className="first">Nascimento:</span>
								<span className="second">XXXXX</span>
							</li>
							<li>
								<span className="first">Cidade:</span>
								<span className="second">XXX</span>
							</li>
							<li>
								<span className="first">Formação:</span>
								<span className="second">XXXX</span>
							</li>
							<li>
								<span className="first">E-mail:</span>
								<span className="second"><a href="mailto:XXX">XXXX</a></span>
							</li>
							<li>
								<span className="first">Telefone:</span>
								<span className="second">XXXX</span>
							</li>
						</ul>
					</div>
				</Container>
			</section>
		</>
	)
}

AboutUs.displayName = "About US";
export default AboutUs;