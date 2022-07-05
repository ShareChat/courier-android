package in.mohalla.phao.client.mqttv3;

public interface MqttInterceptor {
    void onMqttWireMessageSent(byte[] mqttWireMessageBytes);

    void onMqttWireMessageReceived(byte[] mqttWireMessageBytes);
}
