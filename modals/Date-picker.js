// import * as React from 'react';
// import * as NB from 'native-base';
// import DatePicker from '@dietime/react-native-date-picker';


// export default function Dates(props) {
//     const close = () => props.setIsOpen(false)

//     return (
//         <NB.Modal isOpen={props.isOpen} onClose={close} size="md">
//             <NB.Modal.Content maxH="212">
//                 <NB.Modal.CloseButton />
//                 <NB.Modal.Header>{props.date ? props.date.toDateString() : "Select date..."}</NB.Modal.Header>
//                 <NB.Modal.Body>
//                     <DatePicker
//                         value={props.date}
//                         onChange={(value) => props.setDate(value)}
//                         format="yyyy-mm-dd"
//                     />
//                 </NB.Modal.Body>
//                 <NB.Modal.Footer>
//                     <NB.Button.Group>
//                         <NB.Button onPress={() => {
//                             props.setIsOpen(false);
//                         }}>
//                             Save
//                         </NB.Button>
//                     </NB.Button.Group>
//                 </NB.Modal.Footer>
//             </NB.Modal.Content>
//         </NB.Modal>
//     )
// }