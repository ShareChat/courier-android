package com.gojek.mqtt.pingsender

import androidx.annotation.RestrictTo
import `in`.mohalla.phao.client.mqttv3.ILogger
import `in`.mohalla.phao.client.mqttv3.MqttPingSender as PahoPingSender
import `in`.mohalla.phao.client.mqttv3.internal.ClientComms

interface MqttPingSender {
    fun init(comms: ClientComms, logger: ILogger)
    fun start()
    fun stop()
    fun schedule(delayInMilliseconds: Long)

    @RestrictTo(RestrictTo.Scope.LIBRARY)
    fun setPingEventHandler(pingSenderEvents: IPingSenderEvents)
}

@RestrictTo(RestrictTo.Scope.LIBRARY)
fun MqttPingSender.toPahoPingSender(): PahoPingSender {
    val mqttPingSender = this
    return object : PahoPingSender {
        override fun init(comms: ClientComms, logger: ILogger) {
            mqttPingSender.init(comms, logger)
        }

        override fun start() {
            mqttPingSender.start()
        }

        override fun stop() {
            mqttPingSender.stop()
        }

        override fun schedule(delayInMilliseconds: Long) {
            mqttPingSender.schedule(delayInMilliseconds)
        }
    }
}
