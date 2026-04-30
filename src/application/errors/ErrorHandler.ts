import { ApiError } from "@/core/types/api/api.type";
import { toast } from "@/lib/toast/toast";

export type ErrorHandlerCallback = (error: ApiError) => void;

export class ErrorHandler {
    private static instance: ErrorHandler;
    private currentToastId: string | number | null = null;

    private constructor() { }

    static getInstance(): ErrorHandler {
        if (!ErrorHandler.instance) {
            ErrorHandler.instance = new ErrorHandler();
        }
        return ErrorHandler.instance;
    }

    async handle(error: ApiError): Promise<void> {
        this.dismissAllToasts();

        await this.handleWithToast(error);
    }

    private async handleWithToast(error: ApiError): Promise<void> {
        try {
            const { statusCode, message } = error;
            let toastId: string | number | undefined;

            switch (statusCode) {
                case 401:
                    toast.error("No autorizado", message);
                    break;

                case 403:
                    return;

                case 404:
                    toast.error(
                        "No encontrado",
                        message || "El recurso solicitado no existe."
                    );
                    break;

                case 422:
                    toast.error(
                        "Error de validación",
                        message || "Los datos proporcionados no son válidos."
                    );
                    break;

                case 500:
                    toast.error(
                        "Error del servidor",
                        "Ha ocurrido un error en el servidor. Intenta nuevamente."
                    );
                    break;

                case 0:
                    toast.error(
                        "Error de conexión",
                        "No se pudo conectar con el servidor. Verifica tu conexión."
                    );
                    window.location.href = "/logout";
                    break;

                default:
                    toast.error(
                        "Error",
                        message || "Ha ocurrido un error inesperado."
                    );
            }

            if (toastId) {
                this.currentToastId = toastId;
            }
        } catch (toastError) {
            console.error("Error al mostrar toast:", toastError);
        }
    }

    clear(): void {
        this.currentToastId = null;
    }

    dismissAllToasts(): void {
        if (this.currentToastId) {
            try {
                toast.dismiss(this.currentToastId.toString());
            } catch (error) {
                console.warn("Error al cerrar toast:", error);
            }
            this.currentToastId = null;
        }
    }
}

export const errorHandler = ErrorHandler.getInstance();
