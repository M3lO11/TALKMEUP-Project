import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const CalendarDay = ({ day, month, selected }) => (
  <View style={[styles.calendarDay, selected && styles.calendarDaySelected]}>
    <Text style={styles.calendarDayNumber}>{day}</Text>
    <Text style={styles.calendarDayMonth}>{month}</Text>
  </View>
);

const TaskStatus = ({ title, status, percent, color, avatars }) => (
  <View style={styles.taskItem}>
    <View style={[styles.progressCircle, { borderColor: color }]}>
      <Text style={[styles.progressText, { color }]}>{percent}%</Text>
    </View>
    <View style={{ flex: 1 }}>
      <Text style={styles.taskTitle}>{title}</Text>
      <Text style={[styles.taskStatusText, { color }]}>{status}</Text>
    </View>
    <View style={styles.avatarGroup}>
      {avatars.map((uri, i) => (
        <Image
          key={i}
          source={{ uri }}
          style={[styles.avatar, { marginLeft: i === 0 ? 0 : -10 }]}
        />
      ))}
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userIcon}>
            <Text style={styles.userInitial}>👤</Text>
          </View>
          <View>
            <Text style={styles.userName}>Olá, Maria</Text>
            <Text style={styles.userProgressText}>Acompanhe seu progresso</Text>
          </View>
        </View>

        {/* Progress Circle */}
        <View style={styles.progressWrapper}>
          <View style={styles.progressCircleBig}>
            <Text style={styles.progressPercentage}>70%</Text>
          </View>
          <View style={{ marginLeft: 16 }}>
            <Text style={styles.progressLabel}>Objetivo atingido</Text>
            <View style={styles.dateTag}>
              <Text style={styles.dateText}>📅 Nov 25</Text>
            </View>
          </View>
        </View>

        {/* Calendar */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.calendarContainer}
        >
          {[23, 24, 25, 26, 27].map((day) => (
            <CalendarDay
              key={day}
              day={day.toString()}
              month="Nov"
              selected={day === 25}
            />
          ))}
        </ScrollView>

        {/* Tasks */}
        <View style={styles.taskSectionHeader}>
          <Text style={styles.taskHeader}>Suas tarefas</Text>
          <Text style={styles.taskSubheader}>(1/3 completas)</Text>
        </View>

        {/* Toggle */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity style={styles.toggleButtonActive}>
            <Text style={styles.toggleTextActive}>Pendentes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.toggleText}>Concluídas</Text>
          </TouchableOpacity>
        </View>

        {/* Task List */}
        <TaskStatus
          title="Exercício de fala"
          status="Pendente"
          percent={70}
          color="#FF4B4B"
          avatars={["https://i.imgur.com/jLkU4.jpg", "https://i.imgur.com/jLkU4.jpg", "https://i.imgur.com/jLkU4.jpg"]}
        />

        <TaskStatus
          title="Exercício de escuta e compreensão"
          status="Agendado"
          percent={80}
          color="#FFC300"
          avatars={["https://i.imgur.com/jLkU4.jpg", "https://i.imgur.com/jLkU4.jpg"]}
        />

        <TaskStatus
          title="Exercício de conversação"
          status="Concluindo"
          percent={98}
          color="#00CC66"
          avatars={["https://i.imgur.com/jLkU4.jpg", "https://i.imgur.com/jLkU4.jpg"]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f9f9f9" },
  container: { padding: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#EDEBFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  userInitial: { fontSize: 24 },
  userName: { fontSize: 18, fontWeight: "bold", color: "#1F427C" },
  userProgressText: { color: "#B3B3B3" },

  progressWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  progressCircleBig: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#1F427C",
    justifyContent: "center",
    alignItems: "center",
  },
  progressPercentage: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  progressLabel: {
    fontSize: 16,
    color: "#1F427C",
    fontWeight: "bold",
    marginBottom: 6,
  },
  dateTag: {
    backgroundColor: "#1F427C",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: "flex-start",
  },
  dateText: { color: "white", fontWeight: "bold" },

  calendarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    gap: 10,
  },
  calendarDay: {
    backgroundColor: "#00A8B1",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 60,
    alignItems: "center",
  },
  calendarDaySelected: {
    backgroundColor: "#1F427C",
  },
  calendarDayNumber: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  calendarDayMonth: {
    color: "#FFF",
    fontSize: 12,
  },

  taskSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  taskHeader: { fontSize: 20, fontWeight: "bold", color: "#1F427C" },
  taskSubheader: { fontSize: 14, color: "#999" },

  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#EEE",
    borderRadius: 30,
    padding: 4,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  toggleButtonActive: {
    backgroundColor: "#1F427C",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  toggleTextActive: { color: "#FFF", fontWeight: "bold" },
  toggleText: { color: "#1F427C", marginLeft: 10, fontWeight: "bold" },

  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
  },
  progressCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  progressText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  taskTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: "#1F427C",
  },
  taskStatusText: { fontSize: 14 },
  avatarGroup: { flexDirection: "row" },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#FFF",
  },
});

export default App;
