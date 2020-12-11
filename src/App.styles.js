import { createUseStyles } from 'react-jss'

export default createUseStyles({
    root: {
        display: 'flex',
        flexRow: 'row wrap',
        height: '100vh'
    },
    nav: {
        display: 'flex',
        width: 200,
        backgroundColor: 'grey'
    },
    navList: {
        flex: 1,
        listStyle: 'none',
        marginLeft: 0,
        paddingLeft: 10
    },
    navListItem: {
        marginLeft: 0,
        padding: 0
    },
    content: {
        marginLeft: 20
    }
})