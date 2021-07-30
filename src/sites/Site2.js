import React, { Component } from 'react'
import { Box, Typography } from '@material-ui/core';
import DescriptionField from '../components/Main/DescriptionField';
import NetworkDevelopmentPlan from '../components/Main/NetworkDevelopmentPlan';
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
        marginTop:10,
        flex: 1
    }
}
export default class Site2 extends Component {
    render() {
        return (
            <Box style={styles.container}> <Typography style={{ fontFamily: "sans-serif" }}>Ausführliche Projektbeschreibung inkl. Beschreibung des Projektstatus:</Typography>
                <Box style={styles.description}>
                    <DescriptionField allData={this.props.allData} />
                </Box>
                <Box style={styles.image}>
                    <NetworkDevelopmentPlan />
                </Box>
            </Box>
        )
    }
}
