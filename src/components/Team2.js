import React from 'react'
import '../styles/team.css'
import team01 from '../images/picture.png'

const teamMembers = [
    {
        imgUrl: team01,
        name: 'Name',
        position: 'Production Designer'
    },

    {
        imgUrl: team01,
        name: 'Name',
        position: 'Product Designer'
    },

    {
        imgUrl: team01,
        name: 'Name',
        position: 'Customer Service'
    },

    {
        imgUrl: team01,
        name: 'Name',
        position: 'Project Leader'
    },
]
const teamMembers2 = [
    {
        imgUrl: team01,
        name: 'Name',
        position: 'Production Designer'
    },

    {
        imgUrl: team01,
        name: 'Name',
        position: 'Product Designer'
    },

    {
        imgUrl: team01,
        name: 'Name',
        position: 'Customer Service'
    },
]

const Team2 = () => {
    return (
        <section className='our__team'>
            <div className='container'>
                <div className='team__content'>
                    <h2>
                        Development Team
                    </h2>
                </div>
                <div className='team__wrapper'>
                    {
                        teamMembers.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='team__wrapper'>
                    {
                        teamMembers2.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team2