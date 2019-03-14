import React from 'react';

const styles = {
    headerWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: 'teal',
        padding: '10',
        fontSize: '35',
        border: '2px solid green'
    }
}

const header = () => <div style={styles.headerWrapper}>Contacts</div>;

export default header;