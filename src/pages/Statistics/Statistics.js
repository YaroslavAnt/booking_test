import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

import Page from '../../layouts/Page/Page';


class Statistics extends React.Component {
    state = {
        ticketsData: {
            labels: this.props.halls.map(hall => hall.title),
            datasets: [
                {
                    label: "Count of tickets",
                    backgroundColor: ['#888', '#88f', '#8f8', '#f88'],
                    data: this.props.halls.map(hall =>
                        this.props.tickets.filter(ticket =>
                            ticket.hall_id === hall._id).length)
                }
            ],
        },
        ticketsOptions: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }],
            },
            title: {
                display: true,
                text: 'Count of tickets',
                fontSize: 20,
                fontColor: '#333'
            },
            legend: {
                display: false
            }
        },

        usersData: {
            labels: this.props.halls.map(hall => hall.title),
            datasets: [
                {
                    label: "Count of users",
                    backgroundColor: ['#888', '#88f', '#8f8', '#f88'],
                    data: this.props.halls.map(hall =>
                        new Set(
                            this.props.tickets
                                .filter(ticket => ticket.hall_id === hall._id)
                                .map(ticket => ticket.user_id)
                        ).size
                    )
                }
            ]
        },
        usersOptions: {
            title: {
                display: true,
                text: 'Count of users',
                fontSize: 20,
                fontColor: '#333'
            },
            legend: {
                position: 'bottom'
            }
        },

    }

    render() {
        const { ticketsData, ticketsOptions, usersData, usersOptions } = this.state;
        const { halls } = this.props;

        if (halls.length === 0) {
            return <Redirect exact to='/' />
        }

        return (
            <Page>
                <div className="flexbox col">
                    <div className="mb-40">
                        <Bar
                            data={ticketsData}
                            options={ticketsOptions}
                            height={300}
                        />
                    </div>

                    <div>
                        <Doughnut
                            data={usersData}
                            options={usersOptions}
                            height={300}
                        />
                    </div>
                </div>
            </Page>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        tickets: state.tickets.tickets,
        halls: state.halls.halls
    }
}

Statistics.propTypes = {
    tickets: PropTypes.array.isRequired,
    halls: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Statistics);