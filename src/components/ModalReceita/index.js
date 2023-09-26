// import { Text, View, Image, Modal, stylesModalheet, TouchableOpacity } from "react-native";
// import { receitaria } from "../../pages/Services";


// export default function ModalReceita(visible=false) {

//     const [modalVisibility, setVisibility] = useState(visible)

//     alimento = 'linguiça';

//     const receita = receitaria[alimento];

//     const ingredientes = receita['ingrediente'];
//     const passosPreparo = receita['modo de preparo'];

//     const ingredientesJSX = () => {
//         let jsx = [];

//         for (const ingrediente of ingredientes) {
//             jsx.push(<Text style={stylesModal.ingrediente}><Text>&bull;</Text>  {ingrediente}</Text>)
//         }

//         return jsx;
//     };

//     const passosPreparoJSX = () => {
//         let jsx = [];

//         for (const [index, passo] of passosPreparo.entries()) {
//             jsx.push(<Text style={stylesModal.passo}><Text>{index}.</Text>  {passo}</Text>)
//         }

//         return jsx;
//     };

//     return (
//     <Modal animationType="slide" transparent={true} visible={modalVisibility}>
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//             <View style={stylesModal.modalContainer}>
//                 <View style={stylesModal.upperPart}>
//                     <Text style={{fontSize: 24, flex: 8}}>{receita.titulo}</Text>
//                     <TouchableOpacity style={{flex: 1}} onPress={() => setVisibility(false)}>
//                         <Text style={{fontSize: 25, color: 'red', fontWeight: '800'}}>x</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={stylesModal.midPart}>
//                     <Image source={{ uri: receita.image}} style={stylesModal.midImage}></Image>
//                     <View style={stylesModal.midInfos}>
//                         <View style={stylesModal.midInfo}>
//                             <Text style={stylesModal.midInfoTittle}>Dificuldade</Text>
//                             <Text style={stylesModal.info}>{receita.dificuldade}</Text>
//                         </View>
//                         <View style={stylesModal.midInfo}>
//                             <Text style={stylesModal.midInfoTittle}>Tempo</Text>
//                             <Text style={stylesModal.info}>{receita.tempo}</Text>
//                         </View>
//                         <View style={stylesModal.midInfo}>
//                             <Text style={stylesModal.midInfoTittle}>Rendimento</Text>
//                             <Text style={stylesModal.info}>{receita.rendimento}</Text>
//                         </View>
//                     </View>
//                 </View>

//                 <View style={stylesModal.bottomPart}>
//                     <View style={stylesModal.ingredientes}>
//                         <Text style={{fontWeight: '600', fontSize: 12}}>INGREDIENTES</Text>
//                         <View>{ingredientesJSX()}</View>
//                     </View>

//                     <View style={stylesModal.preparo}>
//                         <Text style={{fontWeight: '600', fontSize: 12}}>MODO DE PREPARO</Text>
//                         <View>{passosPreparoJSX()}</View>
//                     </View>
//                 </View>
//             </View>
//         </View>
//     </Modal>
//     );
// }

// const stylesModal = stylesModalheet.create({
//     modalContainer: {
//         flex: 0.93,
//         width: '90%',
//         backgroundColor: '#fff',
//         paddingHorizontal: 20,
//     },

//     upperPart: {
//         flex: 1.8,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',    
//     },

//     midPart: {
//         flex: 3.5,
//         alignItems: 'center',
//         justifyContent: 'space-around',
//     },
//     midImage: { 
//         flex: 0.6,
//         width: '97%', 
//         borderRadius: 8,
//     },
//     midInfos: {
//         flexDirection: 'row',
//         alignContent: 'space-between'
//     },
//     midInfo: {
//         // backgroundColor: 'white',
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignSelf: 'flex-end',
//     },
//     midInfoTittle: {
//         color: '#EF233C',
//         fontSize: 15,
//         fontWeight: '550',
//     },
//     info: {
//         fontWeight: '550',
//         fontSize: 15,
//     },
//     bottomPart: {
//         flex: 6,
//     },
//     ingredientes: {
        
//     },
//     ingrediente: {
//         marginHorizontal: 12,
//         fontSize: 12,
//     },
//     preparo: {
//         marginTop: 20,
//         justifyContent: 'center',
//     },
//     passo: {
//         marginHorizontal: 12,
//         fontSize: 12,
//     },
// });
