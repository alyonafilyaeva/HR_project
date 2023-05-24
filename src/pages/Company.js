import React, { useState } from "react";

function Company() {
    let [city, setCity] = useState('ekb')
    return (
        <div className="container">
            <h3>Компания</h3>
            <div className="cities list">
                <h2 onClick={() => setCity('ekb')} className={`${city === 'ekb' && 'clicked'}`}>Екатеринбург</h2>
                <h2 onClick={() => setCity('krasn')} className={`${city === 'krasn' && 'clicked'}`}>Красноярск</h2>
                <h2 onClick={() => setCity('sochi')} className={`${city === 'sochi' && 'clicked'}`}>Сочи</h2>
            </div>
            <div className="dep-container">
                <h2>Екатеринбург</h2>
                <div className="departments">
                    <div className="dep-item">
                        <h3>Отдел разработки</h3>
                        <div className="dep-list">
                            <p>Python</p>
                            <p>Frontend</p>
                            <p>.NET</p>
                            <p>QA</p>
                            <p>Unity</p>
                            <p>Mobile</p>
                            <p>PHP</p>
                            <p>3D</p>
                            <p>Devops</p>
                            <p>UX/UI Design</p>
                        </div>
                    </div>
                    <div className="dep-item">
                        <h3>Торговый отдел</h3>
                        <div className="dep-list">
                            <p>Sales</p>
                            <p>Marketing</p>
                        </div>
                    </div>
                    <div className="dep-item">
                        <h3>Отдел кадров</h3>
                        <div className="dep-list">
                            <p>HR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company;