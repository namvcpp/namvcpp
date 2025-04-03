import React from 'react';
import OverviewCard from '../../components/OverviewCard';

const ExamplePage = () => {
    return (
        <div className="p-6">
            <OverviewCard 
                title="Test Overview Card" 
                description="This is a test description for the OverviewCard component." 
                icon={<span>🌟</span>} 
                count={42} 
                onClick={() => alert('OverviewCard clicked!')} 
            />
        </div>
    );
};

export default ExamplePage;