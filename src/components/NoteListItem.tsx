
import { date2normal } from "helpers/utils"
import { Note } from "types"
import Icon from "./Icon"

interface NoteProps {
    note: Note
}

const NoteListItem = ({note}: NoteProps) => (
    <div className="co-note-list-item text-normal">
        <div className="d-flex justify-content-between align-items-center  mb-2">
            <div className="text-desc">{date2normal(note.date)}</div>
            <Icon icon="dots" />
        </div>
        <div className="text-semibold mb-2">
            {note.title}
        </div>
        <div className="text-desc">
            {note.description}
        </div>
    </div>
)

export default NoteListItem