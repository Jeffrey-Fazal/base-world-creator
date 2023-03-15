// Component will be used to show the latest stats from the database
export function CharacterOverview() {
    return (<>
            <h2>Check out the latest party</h2>
            {/*TODO: make stats dynamic and add edit button*/}
            {/* Character 1:  */}
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Total Kills</div>
                    <div className="stat-value text-primary">33</div>
                    <div className="stat-desc">Better than last sesion</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Level</div>
                    <div className="stat-value text-secondary">23</div>
                    <div className="stat-desc">Leveling up</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img
                                    src="https://art.ngfiles.com/images/1067000/1067124_krumnut_black-mage.png?f1572344000" alt="mage"/>
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">Human</div>
                    <div className="stat-title">Mage</div>
                    <div className="stat-desc text-secondary">Favourite skill: fireball</div>
                </div>

            </div>
            <br/>
            {/* Character 2 */}
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Total Kills</div>
                    <div className="stat-value text-primary">33</div>
                    <div className="stat-desc">Better than last sesion</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="inline-block w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Level</div>
                    <div className="stat-value text-secondary">23</div>
                    <div className="stat-desc">Leveling up</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img
                                    src="https://art.ngfiles.com/images/1067000/1067124_krumnut_black-mage.png?f1572344000" alt="mage"/>
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">Human</div>
                    <div className="stat-title">Mage</div>
                    <div className="stat-desc text-secondary">Favourite skill: fireball</div>
                </div>

            </div>

            <br/>

        </>)
}