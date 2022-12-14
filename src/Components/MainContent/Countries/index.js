import React, { useEffect } from 'react';
import styled from 'styled-components';
import Country from './Country';
import { getCountries } from '../../Store/Actions/countriesActions';
import { useDispatch, useSelector } from 'react-redux';
import ScrollBar from 'react-perfect-scrollbar';

const Countries = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state =>state.Countries.countries);

    useEffect(()=>{
        dispatch(getCountries())
    },[])

    return (
//style={{maxHeight:'70vh', overflow:'hidden'}}
         <ScrollBar style={{maxHeight:'70vh', overflow:'hidden'}}> 
            <CountriesContainer>
                {
                    countries.map((country, index)=>{
                        return(
                            <Country country={country} key={index} />
                        )
                    })
                }
            </CountriesContainer>
        </ScrollBar>
    );
};

export default Countries;

const CountriesContainer = styled.div`
    width:100%;
    padding:4px 1px;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:12px;

   @media only screen and(max-width:1024px){
        grid-template-columns:repeat(3,1fr);
        gap:10px;
    }

    @media screen and(max-width:768px){
        grid-template-columns:repeat(2,1fr);
        gap:8px;
    }

    @media screen and(max-width:680px){
        grid-template-columns:repeat(1,1fr);
    }
`

