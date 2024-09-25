import React, { useEffect } from 'react';
import './PricingSection.css'; // Ensure to import your CSS for styling

function PricingSection() {
    const pricingPlans = [
        {
            title: 'Basic Plan',
            price: '19.99',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            buttonText: 'Choose Plan',
        },
        {
            title: 'Pro Plan',
            price: '39.99',
            features: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
            buttonText: 'Choose Plan',
        },
        {
            title: 'Enterprise Plan',
            price: '99.99',
            features: ['Feature X', 'Feature Y', 'Feature Z', 'Feature W'],
            buttonText: 'Choose Plan',
        },
    ];

    useEffect(() => {
        const cards = document.querySelectorAll('.pricing-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 200}ms`;
            card.classList.add('animate');
        });
    }, []);

    return (
        <div className="pricing-section">
            <div className="background-animation"></div>
            <h1 className="section-title">Pricing Plans</h1>
            <div className="pricing-cards">
                {pricingPlans.map((plan, index) => (
                    <div className="pricing-card" key={index}>
                        <h2>{plan.title}</h2>
                        <p className="price">${plan.price}</p>
                        <ul className="features">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="feature-item">{feature}</li>
                            ))}
                        </ul>
                        <button className="pricing-button">{plan.buttonText}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PricingSection;
