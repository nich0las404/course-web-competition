import React, {useState, useEffect, useRef} from "react";

function CodingFacts(){
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [why, setWhy] = useState('');

    const [fact1Visible, setFact1Visible] = useState(false);
    const [fact2Visible, setFact2Visible] = useState(false);
    const [fact3Visible, setFact3Visible] = useState(false);
    const [fact4Visible, setFact4Visible] = useState(false);

    const [amountOfDev, setAmountOfDev] = useState(0) // 26.4
    const [techJobs, setTechJobs] = useState(0); // 10
    const [studyDuration, setStudyDuration] = useState(0); // 6
    const [salary, setSalary] = useState(1000000); // 103.000.000
    // refs for each fact
    const fact1Ref = useRef(null);
    const fact2Ref = useRef(null);
    const fact3Ref = useRef(null);
    const fact4Ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && !hasAnimated) {
              setHasAnimated(true);  
              textTypingEffect('Why?');
              observer.unobserve(ref.current); 
            }
          },
          { threshold: 0.2 } // Adjust threshold as needed
        );
    
        if (ref.current) {
          observer.observe(ref.current);
        }
        
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current); // Cleanup
          }
        };
    }, [hasAnimated]);

    // TYPE ANIMATION
    function textTypingEffect(text,i = 0){

      setWhy(words => words += text[i]);

      if(i === text.length - 1){
        return;
      }
      // Final execution animation
      setTimeout(
        () => textTypingEffect('Why study programming?', i + 1)
        ,100
      )
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.target === fact1Ref.current && entry.isIntersecting) {
                setFact1Visible(true);
                startCountUp(0, 26.4, 2500, setAmountOfDev)
                observer.unobserve(fact1Ref.current);
              }
              if (entry.target === fact2Ref.current && entry.isIntersecting) {
                setFact2Visible(true);
                startCountUp(0, 10, 2500, setTechJobs)
                observer.unobserve(fact2Ref.current);
              }
              if (entry.target === fact3Ref.current && entry.isIntersecting) {
                setFact3Visible(true);
                startCountUp(0, 6, 2500, setStudyDuration)
                observer.unobserve(fact3Ref.current);
              }
              if (entry.target === fact4Ref.current && entry.isIntersecting) {
                setFact4Visible(true);
                startCountUp(1000000, 103000000, 2500, setSalary)
                observer.unobserve(fact4Ref.current);
              }
            });
          },
          { threshold: 0.3 }
        );
        // fact observer
        if (fact1Ref.current) observer.observe(fact1Ref.current);
        if (fact2Ref.current) observer.observe(fact2Ref.current);
        if (fact3Ref.current) observer.observe(fact3Ref.current);
        if (fact4Ref.current) observer.observe(fact4Ref.current);
        

        return () => {
          if (fact1Ref.current) observer.unobserve(fact1Ref.current);
          if (fact2Ref.current) observer.unobserve(fact2Ref.current);
          if (fact3Ref.current) observer.unobserve(fact3Ref.current);
          if (fact4Ref.current) observer.unobserve(fact4Ref.current);
        };
      }, []);
      // FACT NUMBER
      const startCountUp = (start, end, duration, settingState) => {
        const startTime = performance.now();
    
        const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Progress percentage (0 to 1)
        const currentNumber = start + progress * (end - start); // Calculate current number
    
        settingState(currentNumber.toFixed(end % 1 === 0 ? 0 : 1)); // Update the state with the current number
    
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
        };
        requestAnimationFrame(animate);
      };
    return(
        <div className="coding-facts-page">
            <div className="line-container">
                <div className="line"></div>
                <hr className="short-horizontal-line"/>
            </div>
            <h1 className="why"><span className={`why-span ${hasAnimated ? 'animate' : ''}`} ref={ref}>{why}</span></h1>
            {/* facts */}
            <div className="autoBlur fact fact1" ref={fact1Ref}>
                <i class={`fa-solid fa-people-group ${fact1Visible ? "iconLeft" : ""}`}></i>
                <div className={`inner-fact ${fact1Visible ? "fact-text-animate" : ""}`}>
                    <h1 className="fact-text text-left">Around <span className="gradient-text-color">{amountOfDev} million</span> software developers exist around the world</h1>
                    <p className="fact-subtext">2.9 million of those are from Indonesia</p>
                </div>
            </div>
            <div className="autoBlur fact fact2" ref={fact2Ref}>
                <i class={`fa-solid fa-arrow-trend-up ${fact2Visible ? "iconRight" : ""}`}></i>
                <div className={`inner-fact ${fact2Visible ? "fact-text-animate" : ""}`}>
                    <h1 className="fact-text text-left">the tech market is expected to create around <span className="gradient-text-color">{techJobs} million</span> jobs</h1>
                    <p className="fact-subtext">92% of all stable jobs worldwide require some form of digital skills​</p>
                </div>
            </div>
            <div className="autoBlur fact fact3" ref={fact3Ref}>
            <i class={`fa-solid fa-graduation-cap ${fact3Visible ? "iconLeft" : ""}`}></i>
                <div className={`inner-fact  ${fact3Visible ? "fact-text-animate" : ""}`}>
                    <h1 className="fact-text text-left">It takes <span className="gradient-text-color">{studyDuration} months</span> to 2 years to become a programmer</h1>
                    <p className="fact-subtext">It varies depending on the consistency, resource, and dedication of the person​</p>
                </div>
            </div>
            <div className="autoBlur fact fact2" ref={fact4Ref}>
            <i class={`fa-solid fa-sack-dollar ${fact4Visible ? "iconRight" : ""}`}></i>
                <div className={`inner-fact ${fact4Visible ? "fact-text-animate" : ""}`}>
                    <h1 className="fact-text text-left">Salary reaching <span className="gradient-text-color">Rp{Number(salary).toLocaleString()}</span> Yearly</h1>
                    <p className="fact-subtext">This is 1.7 to 3.5 times higher than the average minimum wage worker in Indonesia​</p>
                </div>
            </div>
        </div>
    )
} 
export default CodingFacts;