export type GateType = "AND" | "OR" | "NOT" | "NAND" | "NOR" | "XOR" | "XNOR" | "INPUT";

export const topSegment = () => {
    const segment: any = {};

    segment['inputs'] = () => [];

    segment['circuit'] = {
        type: "NAND",
        inputs: [
            {
                type: "NOR",
                inputs: [
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[1]
                    },
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[3]
                    }
                ]
            },
            {
                type: "XOR",
                inputs: [
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[0]
                    },
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[2]
                    }
                ]
            }
        ]
    };

    return segment;
}

export const topLeftSegment = () => {
    const segment: any = {};

    segment['inputs'] = () => [];

    segment['circuit'] = {
        type: "OR",
        inputs: [
            {
                type: "NOR",
                inputs: [
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[0]
                    },
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[1]
                    }
                ]
            },
            {
                type: "AND",
                inputs: [
                    {
                        type: "XOR",
                        inputs: [
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[0]
                            },
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[1]
                            }
                        ]
                    },
                    {
                        type: "XOR",
                        inputs: [
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[2]
                            },
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[3]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return segment;
}

export const topRightSegment = () => {
    const segment: any = {};

    segment['inputs'] = () => [];

    segment['circuit'] = {
        type: "NAND",
        inputs: [
            {
                type: "XOR",
                inputs: [
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[0]
                    },
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[1]
                    }
                ]
            },
            {
                type: "AND",
                inputs: [
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[2]
                    },
                    {
                        type: "NOT",
                        inputs: [
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[3]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return segment;
}

export const centerSegment = () => {
    const segment: any = {};

    segment.inputs = () => [];

    segment.circuit = {
        type: "NAND",
        inputs: [
            {
                type: "NOT",
                inputs: [
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[3]
                    }
                ]
            },
            {
                type: "OR",
                inputs: [
                    {
                        type: "NOR",
                        inputs: [
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[1]
                            },
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[2]
                            }
                        ]
                    },
                    {
                        type: "AND",
                        inputs: [
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[2]
                            },
                            {
                                type: "AND",
                                inputs: [
                                    {
                                        type: "INPUT",
                                        fetch: () => segment['inputs']()[0]
                                    },
                                    {
                                        type: "INPUT",
                                        fetch: () => segment['inputs']()[1]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return segment;
}

export const bottomLeftSegment = () => {
    const segment: any = {};

    segment.inputs = () => [];

    segment.circuit = {
        type: "AND",
        inputs: [
            {
                type: "NOT",
                inputs: [
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[0]
                    }
                ]
            },
            {
                type: "OR",
                inputs: [
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[1]
                    },
                    {
                        type: "NOR",
                        inputs: [
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[1]
                            },
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[2]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return segment;
}

export const bottomRightSegment = () => {
    const segment: any = {};

    segment.inputs = () => [];

    segment.circuit = {
        type: "OR",
        inputs: [
            {
                type: "NOT",
                inputs: [
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[1]
                    }
                ]
            },
            {
                type: "OR",
                inputs: [
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[3]
                    },
                    {
                        type: "OR",
                        inputs: [
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[0]
                            },
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[2]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return segment;
}

export const bottomSegment = () => {
    const segment: any = {};

    segment.inputs = () => [];

    segment.circuit = {
        type: "NOR",
        inputs: [
            {
                type: "AND",
                inputs: [
                    {
                        type: "INPUT",
                        fetch: () => segment['inputs']()[0]
                    },
                    {
                        type: "NOR",
                        inputs: [
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[1]
                            },
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[2]
                            }
                        ]
                    }
                ]
            },
            {
                type: "AND",
                inputs: [
                    {
                        type: "AND",
                        inputs: [
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[2]
                            },
                            {
                                type: "NOT",
                                inputs: [
                                    {
                                        type: "INPUT",
                                        fetch: () => segment['inputs']()[3]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: "XNOR",
                        inputs: [
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[0]
                            },
                            {
                                type: "INPUT",
                                fetch: () => segment['inputs']()[1]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return segment;
}
