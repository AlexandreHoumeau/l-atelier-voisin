declare module "nodemailer" {
  export interface Transporter {
    sendMail(mailOptions: Record<string, unknown>): Promise<unknown>;
  }

  export interface TransportOptions {
    host?: string;
    port?: number;
    secure?: boolean;
    auth?: {
      user?: string;
      pass?: string;
    };
  }

  const nodemailer: {
    createTransport(options: TransportOptions): Transporter;
  };

  export default nodemailer;
}
