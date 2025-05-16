import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Trung</strong>. 
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of programming started with a curiosity to understand how things work behind the scenes. This curiosity gradually evolved into a passion for building functional and meaningful digital solutions. As a student in Information Technology, I’ve been continuously sharpening my coding skills and learning how to think like a developer.

            In the short term, my goal is to secure an internship at a forward-thinking company where I can apply the knowledge I’ve gained, take on real-world challenges, and work alongside experienced developers. 
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            I believe an internship will not only help me gain hands-on experience but also allow me to contribute fresh ideas and enthusiasm to the team.

            Looking ahead, I aspire to become a dedicated and reliable team member who adds real value to the company. I am committed to learning continuously, growing both personally and professionally, and eventually taking on key responsibilities in future projects. My long-term vision is to be part of a collaborative team that develops impactful software products and contributes to innovation in the tech industry.
              
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
