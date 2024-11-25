/*******************************************************************************
 * Copyright (c) 2009, 2014 IBM Corp.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution. 
 *
 * The Eclipse Public License is available at 
 *    http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at 
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *    Dave Locke - initial API and implementation and/or initial documentation
 */
package in.mohalla.paho.client.mqttv3.internal.wire;

import java.io.ByteArrayInputStream;
import java.io.DataInputStream;
import java.io.IOException;

import in.mohalla.paho.client.mqttv3.MqttException;

/**
 * An on-the-wire representation of an MQTT PUBACK message.
 */
public class MqttPubAck extends MqttAck
{
	public MqttPubAck(byte info, byte[] data) throws IOException {
		super(MESSAGE_TYPE_PUBACK);
		ByteArrayInputStream bais = new ByteArrayInputStream(data);
		DataInputStream dis = new DataInputStream(bais);
		msgId = dis.readUnsignedShort();
		dis.close();
	}

	public MqttPubAck(MqttPublish publish)
	{
		super(MESSAGE_TYPE_PUBACK);
		msgId = publish.getMessageId();
	}

	protected byte[] getVariableHeader() throws MqttException {
		return encodeMessageId();
	}
}
