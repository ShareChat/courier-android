package com.gojek.mqtt.exception.handler.v3

import `in`.mohalla.paho.client.mqttv3.MqttException

internal interface MqttExceptionHandler {
    fun handleException(mqttException: MqttException, reconnect: Boolean)
}
