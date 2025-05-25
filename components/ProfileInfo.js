import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useUser } from '../providers/UserContext';
import avatar from '../assets/icons/avatar.png';
import colors from '../theme/colors';
import { Foundation, FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useMotos } from '../providers/UseMotos';

export default function ProfileInfo() {
  const { user } = useUser();
  const navigation = useNavigation();

  const { motos } = useMotos();
  const total = motos.length;

  return (
    <View>
      <View style={styles.profileContainer}>
        <Image
          source={avatar}
          style={styles.profileImg}
        />
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      <View style={styles.patioContainer}>
        <View style={styles.patioHeader}>
          <Entypo name="location-pin" size={24} color="#fff" />
          <Text style={styles.patioTitle}>Filial</Text>
          
        </View>

        <View style={styles.patioDiv}>
          <Text style={styles.patioText}>
            Endereço: <Text>{user?.adress}</Text>
          </Text>
          <Text style={styles.patioText}>
            Motos no pátio: <Text style={styles.motoText}>{total}</Text>
          </Text>
        </View>
      </View>

      <View style={styles.atalhoContainer}>
        <Text style={styles.atalhoTitle}>Atalhos</Text>

        <View style={styles.atalhoIcons}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate('Home')}
          >
            <Foundation name="graph-bar" size={28} color={colors.secundary} />
            <Text style={styles.iconText}>Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate('PatioZonas')}
          >
            <FontAwesome5 name="parking" size={28} color={colors.secundary} />
            <Text style={styles.iconText}>Ver Pátio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate('NovaMoto')}
          >
            <MaterialIcons name="add-circle-outline" size={28} color={colors.secundary} />
            <Text style={styles.iconText}>Cadastrar Moto</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 40,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
  },
  email: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 5,
  },
  patioContainer: {
    marginHorizontal: 30,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  patioHeader: {
    backgroundColor: colors.secundary,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  patioTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  patioDiv: {
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  patioText: {
    fontSize: 15,
    marginVertical: 5,
  },
  motoText: {
    fontWeight: 'bold',
    color: colors.text,
  },
  atalhoContainer: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  atalhoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.title,
    marginVertical: 15,
  },
  atalhoIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    padding: 15,
    alignItems: 'center',
    width: '32%',
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
  },
  iconText: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 13,
    color: '#000',
  },
});
