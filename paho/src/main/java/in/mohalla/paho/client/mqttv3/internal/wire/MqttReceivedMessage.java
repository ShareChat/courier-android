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

import in.mohalla.paho.client.mqttv3.MqttMessage;

public class MqttReceivedMessage extends MqttMessage
{

	private int messageId;

	public void setMessageId(int msgId)
	{
		this.messageId = msgId;
	}

	public int getMessageId()
	{
		return messageId;
	}

	// This method exists here to get around the protected visibility of the
	// super class method.
	public void setDuplicate(boolean value)
	{
		super.setDuplicate(value);
	}
}
