import React from 'react';
import PaginationComponents from "../components/PaginationComponent";
import CharactersComponent from "../components/CharactersComponent";

const MainLayout = () => {

    return (
        <div>
            <CharactersComponent/>
            <PaginationComponents/>
        </div>
    );
};

export default MainLayout;