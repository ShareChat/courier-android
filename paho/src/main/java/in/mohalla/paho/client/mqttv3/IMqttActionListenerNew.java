package in.mohalla.paho.client.mqttv3;

public interface IMqttActionListenerNew extends IMqttActionListener
{
	public void notifyWrittenOnSocket(IMqttToken asyncActionToken);
}
