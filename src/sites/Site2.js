import React, { Component } from 'react'
import { Box, TextField } from '@material-ui/core';
import DescriptionField from '../components/DescriptionField';
import NetworkDevelopmentPlan from './../components/NetworkDevelopmentPlan';
const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: "flex",
        flexDirection: "column"
    },
    description: {
        flex: 2,
    },
    image: {
        flex: 1
    }
}
export default class Site2 extends Component {
    render() {
        return (
            <Box style={styles.container}>
                <Box style={styles.description}>
                    <DescriptionField />
                </Box>
                <Box style={styles.image}>
                    <NetworkDevelopmentPlan />
                </Box>
            </Box>
        )
    }
}
