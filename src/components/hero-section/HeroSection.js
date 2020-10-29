import React from 'react'
import * as classes from './HeroSection.module.css';
function HeroSection() {
    return (
        <div className={classes.HeroSectionWrapper}>
            <div className={classes.BackgroundStyle}>
                <div className={classes.ContentWrapper}>
                    <div className={classes.Content_Left}>
                        <div className={classes.LocationAndDate}>
                            <span className={classes.Location}>COLOGNY, SWITZERLAND</span>
                            <span className={classes.Date}>01—05 June 2020</span>
                        </div>
                        <h1 className={classes.Main_Heading}>
                        Virtual Ocean Dialogues
                        </h1>
                    </div>
                    <div className={classes.Content_Right}>
                        <h2 className={classes.Heading}>
                        Connecting Communities for Ocean Resilience, Innovation and Action
                        </h2>
                        <p className={classes.Para}>
                        The World Economic Forum and Friends of Ocean Action are hosting a global online conference for ocean action, the Virtual Ocean Dialogues, on 1-5 June 2020. The Virtual Ocean Dialogues will connect communities across the world that are seeking innovation and taking bold action for a healthy, resilient, thriving ocean.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HeroSection
