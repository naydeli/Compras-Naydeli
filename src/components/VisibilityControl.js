    export const VisibilityControl = ({ isChecked, setShowCompleted, cleanTask}) => {

       const handleDelete = () => {
            if (window.confirm('Esta seguro de eliminar esta compra?')) {
                cleanTask()
            }
        }

        return (
            <div className="d-flex justify-content-between bg-defaul text-black text-center p-2 border-primary">
            <div className="form-check form-switch">
            <input
            className="form-check-input"
             type="checkbox"
             checked={isChecked}
              onChange={e=> setShowCompleted(e.target.checked) }
              /> {""}
            <label>Mostrar Compras Realizadas</label>
            </div>

            <button onClick={handleDelete} className="btn btn-danger btn-sm bg-defaul" >
                Eliminar
            </button>
          </div>
        )
    }