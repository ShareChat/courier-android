/*******************************************************************************
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *    https://www.eclipse.org/legal/epl-2.0
 * and the Eclipse Distribution License is available at
 *   https://www.eclipse.org/org/documents/edl-v10.php
 *
 * Contributors:
 *    alexm   26/10/18
 */

package in.mohalla.paho.client.mqttv3.internal;

import in.mohalla.paho.client.mqttv3.internal.wire.MqttWireMessage;

public interface IDiscardedBufferMessageCallback {
    void messageDiscarded(MqttWireMessage message);
}

