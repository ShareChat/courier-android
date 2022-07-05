package com.gojek.mqtt.connection

import `in`.mohalla.phao.client.mqttv3.IMqttActionListener
import `in`.mohalla.phao.client.mqttv3.IMqttToken

internal class NoOpConnectListener :
    IMqttActionListener {
    override fun onSuccess(asyncActionToken: IMqttToken?) {
    }

    override fun onFailure(asyncActionToken: IMqttToken?, exception: Throwable?) {
    }
}
