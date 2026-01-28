import { Html } from "@react-email/html";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Button } from "@react-email/button";

interface ConfirmationEmailProps {
    name: string;
}

export default function ConfirmationEmail({ name }: ConfirmationEmailProps) {
    return (
        <Html>
            <Body style={{ backgroundColor: "#FBE8D8", fontFamily: "Arial, sans-serif" }}>
                <Container style={{ backgroundColor: "#fff", padding: "32px", borderRadius: "12px" }}>
                    <Heading style={{ color: "#C87056" }}>Merci pour votre message, {name} !</Heading>
                    <Text style={{ color: "#333", fontSize: "16px", lineHeight: "24px" }}>
                        Nous avons bien reçu votre message et nous vous contacterons dans les plus brefs délais.
                    </Text>
                    <Text style={{ color: "#333", fontSize: "16px", lineHeight: "24px" }}>
                        En attendant, vous pouvez visiter notre site pour découvrir nos projets et services.
                    </Text>
                    <Button
                        href="https://atelier-voisin.fr"
                        style={{
                            backgroundColor: "#C87056",
                            color: "#fff",
                            padding: "12px 24px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            display: "inline-block",
                            marginTop: "16px",
                        }}
                    >
                        Visitez notre site
                    </Button>
                </Container>
            </Body>
        </Html>
    );
}
