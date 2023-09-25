import React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind'

type EmailTemplateProps = {
  message: string
  senderEmail: string
}

const EmailTemplate = ({message, senderEmail}: EmailTemplateProps) => {
  return (
    <Html>
        <Head />
        <Preview>New message from your portfolio site</Preview>
        <Tailwind>
            <Body className='bg-gray-100'>
                <Container>
                    <Section className='bg-white border border-black/5 my-10 px-10 py-4 roundedn-md'>
                        <Heading className='leading-tight'>Message from your portfolio site</Heading>
                        <Hr />
                        <Text>{message}</Text>
                        <Hr />
                        <Text>The sender's email. is: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

export default EmailTemplate