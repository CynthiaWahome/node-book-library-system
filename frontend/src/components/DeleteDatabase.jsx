import axios from "axios";

const DeleteDatabase = ({ fetchBooks }) => {
    const deleteDatabaseFunction = async () => {
        try {
            await axios.delete("/api/delete-database");
            fetchBooks();
        } catch (error) {
            alert(error || "Error deleting database");
        }
    };
    return (
        <div className="delete-database-container">
            <h2>Delete Database</h2>
            <button onClick={deleteDatabaseFunction}>Delete Database</button>
        </div>
    );
};

export default DeleteDatabase;