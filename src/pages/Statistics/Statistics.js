import React from 'react';
import { Bar } from 'react-chartjs-2';
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
                    backgroundColor: 'rgb(255, 99, 132)',
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
            }
        },
        usersData: {
            labels: this.props.halls.map(hall => hall.title),
            datasets: [
                {
                    label: "Count of users",
                    backgroundColor: 'rgb(255, 99, 132)',
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
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    }
                }],
            },
            title: {
                display: true,
                text: 'Count of users',
                fontSize: 20,
                fontColor: '#333'
            }
        },
        timeData: {
            labels: this.props.halls.map(hall => hall.title),
            datasets: [
                {
                    label: "Count of time",
                    backgroundColor: 'rgb(255, 99, 132)',
                    data: this.props.halls.map(hall =>
                        this.props.tickets.filter(ticket =>
                            ticket.hall_id === hall._id).length)
                }
            ],
        },
        timeOptions: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    }
                }],
            },
            title: {
                display: true,
                text: 'Count of time',
                fontSize: 20,
                fontColor: '#333'
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
                    <div>
                        <Bar
                            data={ticketsData}
                            options={ticketsOptions}
                            height={300}
                        />
                    </div>

                    <div>
                        <Bar
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