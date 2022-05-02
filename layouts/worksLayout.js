import Footer from "../components/Footer";
import Nav from "../components/Nav"

const WorksLayout = ({children, active=1}) => {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
        }}>
            <Nav active={active}/>
            {children}
            <Footer/>
        </div>
    )
}

export default WorksLayout;