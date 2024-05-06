import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { View, Platform, FlatList, SafeAreaView } from 'react-native';
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import HistoricalCard from "../components/HistoricalCard";
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import HistoricalCardSkeleton from '../components/HistoricalCardSkeleton';
import { historicalScreenStyles } from '../styles/screenStyles';

const HistoricalScreen = () => {
  const [historical, setHistorical] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchHistorical = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "historical"));
        const fetchedHistorical = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHistorical(fetchedHistorical);
      } catch (error) {} finally {
        setLoading(false);
      }
    };
    fetchHistorical();
  }, []);

  const renderSkeletons = () => {
    return Array.from({ length: 15 }).map((_, index) => (
      <HistoricalCardSkeleton key={index} />
    ));
  };

  return (
    <LinearGradient
    colors={['#5E7CE2', '#A0D2DB', '#87CEEB']}
      style={{ ...historicalScreenStyles.container }}
    >
      <Appbar.Header style={historicalScreenStyles.appbar}>
        {Platform.OS === 'android' && (
          <Appbar.BackAction onPress={() => navigation.navigate('ImageUpload')} />
        )}
        <Appbar.Content title={'Historical'} titleStyle={historicalScreenStyles.title_header} />
      </Appbar.Header>
      <SafeAreaView style={{ ...historicalScreenStyles.container }}>
        {loading ? (
          <View>{renderSkeletons()}</View>
        ) : (
          <FlatList
            data={historical}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <HistoricalCard historical={item} />}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HistoricalScreen;