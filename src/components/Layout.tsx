import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-transparent flex flex-col">
            {/* Main Content with Navigation - slides over footer */}
            <div className="relative z-10 bg-white shadow-2xl mb-[450px] rounded-b-[2rem] flex flex-col min-h-screen">
                <Navigation />
                <main className="flex-grow">
                    {children}
                </main>
            </div>

            {/* Fixed Footer - revealed from behind */}
            <div className="fixed bottom-0 left-0 right-0 z-0 h-[450px]">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
