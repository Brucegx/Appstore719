srcdir = .


include ../../Mk/macports.autoconf.mk

# This Makefile will only be run on Darwin systems; we can safely use
# Apple-specifics here
SRCS=		$(wildcard *.c)
OBJS=		$(SRCS:%.c=%.o)
SHLIB_NAME=	darwintrace${SHLIB_SUFFIX}
INSTALLDIR=	${DESTDIR}${TCL_PACKAGE_PATH}/darwintrace1.0

# Yes, we know having $ signs in identifiers is not a very good idea; in the
# case of darwintrace we still need them, though.
CFLAGS_PEDANTIC=
CFLAGS+= -fPIC ${UNIVERSAL_ARCHFLAGS}
SHLIB_LDFLAGS+=${UNIVERSAL_ARCHFLAGS}

all:: ${SHLIB_NAME}

$(SHLIB_NAME):: ${OBJS}
	${SHLIB_LD} ${OBJS} -o ${SHLIB_NAME} ${SHLIB_LDFLAGS} ${LIBS}

clean::
	rm -f ${OBJS} ${SHLIB_NAME} so_locations

distclean:: clean

install:: all
	$(INSTALL) -d -o ${DSTUSR} -g ${DSTGRP} -m ${DSTMODE} ${INSTALLDIR}
	$(INSTALL) -o ${DSTUSR} -g ${DSTGRP} -m 444 ${SHLIB_NAME} ${INSTALLDIR}

test::
