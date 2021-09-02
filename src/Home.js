export function Home() {
    return(
        <div className='Picture'>
        <img src='ProfessionalPicture.png' height='300' width='300'></img>
        
        
        <h1>Dylan Mullican</h1>
        <h3>Student at James Madison University (Graduation Date: May 9th 2021)</h3>
        
        <h2 className='SummaryTitle'>About Me:</h2>
    
        <p className='Summary'>
            As an undergraduate student at James Madison University I studied Integrated Science & Technology. Within my major,
            I concentrated in Information Knowledge Management with sectors in Holistic Problem Solving and 
            Production Systems. 
        </p>
        <div className='InterestContainer'>
        <div className='AcademicInterestContainer'>
            <h3 className='AcademicInterestTitle'>Academic Interest</h3>
        <ul className='AcademicInterest'>
            <li>Artificial Intelligence</li>
            <li>Data Science and Machine Learning</li>
            <li>Website and Application Development</li>
            <li>Social Implications of Technology on Society</li>
            <li>Data Privacy and Security</li>
        </ul></div>
        <div className='PersonalInterestContainer'>
            <h3 className='PersonalInterestTitle'>Personal Interest</h3>
        <ul className='PersonalInterest'>
            <li>Developing Meaningful Personal Relationships</li>
            <li>Playing and Watching Sports</li>
            <li>Music</li>
            <li>Physical Fitness</li>
            <li>Traveling</li>
            <li>Real Estate Investment</li>
            <li>Entrepreneurship</li>
        </ul></div>
        </div>
        
        <h3 className='ContactTitle'>Contact Information:</h3>
        <div className='ContactInfo'>
            Phone: (804) 972-0159 <br></br><br></br>
            Email: DylanMullican@gmail.com <br></br><br></br>
            
            <a href="https://www.linkedin.com/in/dylan-m-850602119/"><b>Linkedin Profile</b></a>
            

           
            
            
        </div>
        
        </div>
        );
    }