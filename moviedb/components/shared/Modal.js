import { connect } from 'react-redux';
import * as actionCreators from "../../store/actions/index";

//redux implementation
const Modal = (props) => {
    return (
        <div className="modal" style={{ display: `${props.modalonaction.isOpen}`  }}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={()=>props.onActionModal({isOpen:"none"})} >&times;</span>
                    <h2>{props.modalonaction.value && props.modalonaction.value.Title}</h2>
                </div>
                <div className="modal-body">
                    <img className="modal-img" src={props.modalonaction.value && props.modalonaction.value.Poster}/>
                </div>
            </div>
        </div>
    )
}

export const mapStateToProps = state => {
    return {
       modalonaction: state.modalAction.result
    }
 };
 export const mapDispatchToProps = dispatch => {
    return {
       onActionModal: (result) => dispatch(actionCreators.modalAction(result))
    }
 };

export default connect(mapStateToProps,mapDispatchToProps)(Modal);