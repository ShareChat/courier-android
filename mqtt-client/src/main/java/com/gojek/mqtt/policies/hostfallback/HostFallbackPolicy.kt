package com.gojek.mqtt.policies.hostfallback

import com.gojek.mqtt.model.ServerUri
import `in`.mohalla.phao.client.mqttv3.MqttException
import `in`.mohalla.phao.client.mqttv3.MqttException.REASON_CODE_CLIENT_EXCEPTION

internal class HostFallbackPolicy(
    serverUris: List<ServerUri>
) : IHostFallbackPolicy {
    private var currentIndex = 0
    private val serverUriList = serverUris.toList()

    init {
        if (serverUris.isEmpty()) {
            throw IllegalArgumentException("serverUris should not be empty")
        }
    }

    override fun getServerUri(): ServerUri {
        return serverUriList[currentIndex]
    }

    override fun onConnectFailure(exception: Throwable) {
        if (exception is MqttException &&
            exception.reasonCode.toShort() == REASON_CODE_CLIENT_EXCEPTION
        ) {
            currentIndex = (currentIndex + 1) % serverUriList.size
        }
    }

    override fun resetParams() {
        currentIndex = 0
    }
}
